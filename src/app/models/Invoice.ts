export interface Invoice{
    InvoiceId: number;
    OwnerId: number;
    CompanyName: string;
    CompanyAddress: string;
    BillName: string;
    BillAddress: string;
    CreatedUtc?: Date;
    ModifiedUtc?: Date;
}