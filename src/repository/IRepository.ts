export default interface IRepository {
    resetDatabase() :boolean;
    getBalanceByAccountNum(accountNum :string) :number;
}