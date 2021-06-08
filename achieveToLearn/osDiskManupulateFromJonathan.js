/* eslint-disable import/no-commonjs */

const getSoleContainerAdmin = (taxonomyUserRoleArr = []) => {
    let rolesNext = taxonomyUserRoleArr;
    if (taxonomyUserRoleArr.find((item) => item === 'Space admin')) {
        const rolesNo2Admins = taxonomyUserRoleArr.filter(
            (item) =>
                item !== 'Space admin' &&
                item !== 'Container admin (e.g. Project admin, Space admin)'
        );

        rolesNext = [
            ...rolesNo2Admins,
            'Container admin (e.g. Project admin, Space admin)'
        ];
    }
    return rolesNext;
};

const getMappedTaxonomyUserToRef = (taxonomyUserRoleRefArr = []) => {
    let rolesNext = [];

    const mapTaxonomyUser = {
        'Billing contact': 'rQR9mQR4Ahigjr8z0NOAs',
        'Container admin (e.g. Project admin, Space admin)':
            '2A5ZprDjvybvIuZV27UitC',
        'End user': '7CoSEA70kwXMe8x04ZK5P6',
        'Product admin': 'wj1ivpVhSBpiUd1jBGjYJ',
        'Site admin': '4xU23v16qx3Fj0O5y06uOy',
        'Technical contact': '1GhwLTt9qc5P7jnbktQyDb'
    };

    if (taxonomyUserRoleRefArr.length) {
        rolesNext = taxonomyUserRoleRefArr.map((item) => {
            return {
                sys: {
                    type: 'Link',
                    linkType: 'Entry',
                    id: mapTaxonomyUser[item]
                }
            };
        });
    }
    return rolesNext;
};

module.exports = function (migration) {
    /*--- Stage I. Create a field for topic & topicInProduct ---*/
    const migrationModels = [
        {
            modelId: 'topic',
            afterField: 'metaDescription',
            transformFrom: ['taxonomyUserRoleRef', 'taxonomyUserRole'],
            requiredFields: [
                'referencesManagerField',
                'contextReference',
                'topicType',
                'topicTitle',
                'url',
                'collectionReference'
            ]
        },
        {
            modelId: 'topicInProduct',
            afterField: 'searchText',
            transformFrom: ['taxonomyUserRoleRef', 'taxonomyUserRole'],
            requiredFields: [
                'contextReference',
                'topicType',
                'title',
                'body',
                'description',
                'topicId'
            ]
        }
    ];

    migrationModels.forEach(({ modelId, afterField }) => {
        const migrationModel = migration.editContentType(modelId);
        const fieldId = 'taxonomyUserRoleRef';

        /*eslint-disable no-empty */
        try {
            migrationModel.deleteField(fieldId);
        } catch {}
        /*eslint-enable */

        migrationModel.createField(fieldId, {
            name: 'What is the audience for this topic?',
            type: 'Array',
            localized: false,
            required: false,
            validations: [],
            disabled: false,
            omitted: false,
            items: {
                type: 'Link',
                linkType: 'Entry',
                validations: [
                    {
                        linkContentType: ['taxonomyUserRole']
                    }
                ]
            }
        });

        migrationModel.changeFieldControl(
            fieldId,
            'builtin',
            'entryLinksEditor',
            {
                showCreateEntityAction: false,
                showLinkEntityAction: true
            }
        );

        migrationModel.moveField(fieldId).afterField(afterField);
    });

    /*--- Stage II. Toggle some fields required to false ---*/

    const toggleRequiredFields = (modelId, requiredFields, turnOn) => {
        requiredFields.forEach((field) => {
            migration
                .editContentType(modelId)
                .editField(field)
                .required(turnOn);
        });
    };

    migrationModels.forEach(({ modelId, requiredFields }) => {
        toggleRequiredFields(modelId, requiredFields, false);
    });

    /*--- Stage III. Migrate selections to the new field ---*/
    migrationModels.forEach(({ modelId, transformFrom }) => {
        migration.transformEntries({
            contentType: modelId,
            from: transformFrom,
            to: ['taxonomyUserRoleRef'],
            transformEntryForLocale: function (fields, locale) {
                let taxonomyUserRoleRefNext2;

                if (
                    fields.taxonomyUserRole &&
                    fields.taxonomyUserRole[locale] &&
                    fields.taxonomyUserRole[locale].length
                ) {
                    const taxonomyUserRoleRefNext1 = getSoleContainerAdmin(
                        fields.taxonomyUserRole[locale]
                    );

                    taxonomyUserRoleRefNext2 = getMappedTaxonomyUserToRef(
                        taxonomyUserRoleRefNext1
                    );
                }

                if (taxonomyUserRoleRefNext2) {
                    return {
                        taxonomyUserRoleRef: taxonomyUserRoleRefNext2
                    };
                }
            }
        });
    });

    /*--- Stage IV. Toggle some fields required back to true ---*/
    migrationModels.forEach(({ modelId, requiredFields }) => {
        toggleRequiredFields(modelId, requiredFields, true);
    });
};
