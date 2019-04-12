export interface Invoice{
    InvoiceId: number;
    OwnerId: number;
    CompanyName: string;
    CompanyAddress: string;
    BillName: string;
    BillAddress: string;
    GrandTotal: number;
    // Product list fields
    ProductName: string;
    ProductPrice: number;
    Quantity: number;
    TotalPrice?: number;
    CreatedUtc?: Date;
    ModifiedUtc?: Date;
}