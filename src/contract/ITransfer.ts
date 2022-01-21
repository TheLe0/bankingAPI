import { IDestination } from '.';

export interface ITransfer {
    readonly origin: IDestination,
    readonly destination: IDestination;
}