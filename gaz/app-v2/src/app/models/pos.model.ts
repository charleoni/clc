export class Pos {
    constructor(
        public code: string,
        public branch_code: string,
        public name: string,
        public address: string,
        public department_code: string,
        public department_name: string,
        public city_code: string,
        public city_name: string,
        public price_id: string,
        public supervisor_id: string,
        public operation_center_id: string,
        public billing: string,
        public tradename?: string,
        public neighborhood?: string,
        public phone?: string,
        public email?: string,
        public discount_id?: string,
        public id?: string,
        public date?: string,
    ) {}
}