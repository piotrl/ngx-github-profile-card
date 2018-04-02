declare class GitHubCard {
    constructor(options?: Partial<ConfigurationModel>);

    init(): void;

    refresh(options: Partial<ConfigurationModel>);
}

declare interface ConfigurationModel {
    username: string;
    template: string;
    sortBy: 'sortBy' | 'updateTime';
    maxRepos: number;
    headerText: string;
}
