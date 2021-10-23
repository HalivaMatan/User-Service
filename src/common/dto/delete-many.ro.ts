export class DeleteManyRo {
    readonly deletedCount: number;

    constructor(deletedCount: number){
        this.deletedCount = deletedCount;
    }

}