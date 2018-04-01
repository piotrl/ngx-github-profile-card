export interface ConfigurationModel {
    username: string;
    template: string;
    sortBy: 'sortBy' | 'updateTime';
    maxRepos: number;
    headerText: string;
}
