public class BankTest {
    public static void main(String[] args){
        // Create 3 bank accounts
        BankAccount account1 = new BankAccount();
        BankAccount account2 = new BankAccount();
        BankAccount account3 = new BankAccount();

        // Deposit Test
        // - deposit some money into each bank account's checking or savings account and display the balance each time
        // - each deposit should increase the amount of totalMoney
        account1.depositChecking(1500);
        account2.depositChecking(3500);
        account3.depositChecking(4000);
        account1.depositSaving(1000);
        account2.depositSaving(2000);
        account3.depositSaving(2500);
        // Withdrawal Test
        // - withdraw some money from each bank account's checking or savings account and display the remaining balance
        // - each withdrawal should decrease the amount of totalMoney
        account1.withdrawChecking(900);
        account1.withdrawChecking(800);
        account1.withdrawChecking(2400);
        // Static Test (print the number of bank accounts and the totalMoney)
        System.out.println(BankAccount.getAccounts());
        System.out.println(BankAccount.getTotalMoney());
    }
}
