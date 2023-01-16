/** Type that represents the map of each component identifier with related fields. */
export type TComponentMap = {
    [id: string]: {
        /** Relative path to folder containing the component's modules. */
        path: string;
        /** Display name of the component. */
        name: string;
        /** Description of the component. */
        desc: string;
    };
};

/** Type definition for each component's definition object. */
export interface IComponentDefinition {
    /** Dependent components. */
    dependencies: {
        /** List of identifiers of required dependent components. */
        required: string[];
        /** List of identifiers of optional dependent components. */
        optional: string[];
    };
    /** Feature flag map. */
    flags: {
        [flag: string]: boolean;
    };
    /** i18n string identifier - description map. */
    strings: {
        [string: string]: string;
    };
    /** Syntax elements exposed. */
    elements?: {
        [identifier: string]: IElementSpecification;
    };
}

import { IElementSpecification } from '@sugarlabs/musicblocks-v4-lib';

/** Interface representing a component's API. */
export interface IComponent {
    /**
     * Mounts the component (loads subcomponents, mounts DOM elements, etc.).
     *
     * @param flags - feature flag toggles
     */
    mount(flags?: IFeatureFlags): Promise<void>;
    /** Sets up the component — initializes component after it is mounted. */
    setup(): Promise<void>;
    /** Map of the string identifiers the component requires i18n for. */
    strings: { [key: string]: string };
    /** Syntax element specification object for the component. */
    specification?: {
        [identifier: string]: IElementSpecification;
    };

    definition: IComponentDefinition;
}