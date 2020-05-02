export class PosInventory {
    constructor(
        public code: string,
        public branch_code: string,
        public product: string,
        public quantity: number,
        public supervisor_id: string
    ) {}
}