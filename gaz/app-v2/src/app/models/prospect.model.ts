export class Prospect {
    constructor(
        public code: string,
        public name: string,
        public mobile: string,
        public email: string,
        public address: string,
        public departmentId: string,
        public cityId: string,
        public location: any,
        public supplier: string,
        public turnover: number,
        public installedCapacity: Capacity[],
        public phone?: string,
        public tradeName?: string,
        public observations?: string,
        public id?: number,
    ) {}
}

export class Capacity {
    constructor(
        public item: string,
        public price: number,
        public quantity: number,
    ) {}
}