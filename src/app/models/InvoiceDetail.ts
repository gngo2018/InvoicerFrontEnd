export interface InvoiceDetail{
    InvoiceId: number;
    OwnerId?: number;
    CompanyName: string;
    CompanyAddress: string;
    BillName: string;
    BillAddress: string;
    ProductList: any;
    GrandTotal?: number;
}