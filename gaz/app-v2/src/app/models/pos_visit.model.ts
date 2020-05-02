export class PosVisit {
    constructor(
        public supervisor_id: string,
        public date: Date,
        public code: string,
        public branch_code: string,
        public location: string,
        public authorization: boolean,
        public needs: Need,
        public inventory: Inventory,
        public commercial_behavior: CommercialBehavior,
        public observations: string,
        public start_date: Date,
        public start_location: any,
        public is_finished: boolean,
        public user_id: number,
        public active: number,
        public id?: number,
        public end_date?: Date,
        public end_location?: any,
        public pos?: any,
    ) {}
}

export class Need {
    constructor(
        public observations: string,
        public promise: boolean,
        public commitment: string,
    ) {}
}

export class Inventory {
    constructor(
        public list: InventoryList[],
        public image: string,
        public observations: string
    ) {}
}

export class InventoryList {
    constructor(
        public product: string,
        public quantity: number,
        public check: number
    ) {}
}

export class CommercialBehavior {
    constructor(
        public compliance: boolean,
        public observations: string
    ) {}
}