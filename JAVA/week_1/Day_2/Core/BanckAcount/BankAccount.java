public class BankAccount {
    // MEMBER VARIABLES
    private double checkingBalance;
    private double savingsBalance;

    private static int accounts;
    private static double totalMoney; 
    // CONSTRUCTOR
    // Be sure to increment the number of accounts

    public BankAccount(){};

    public BankAccount ( double checkingBalance , double savingsBalance ){
        this.checkingBalance= 0.0;
        this.savingsBalance= 0.0;
        accounts++;
    }
    
    // METHODS
    // deposit
    // - users should be able to deposit money into their checking or savings account
    public void depositChecking( double prices){
        this.setCheckingBalance(this.getCheckingBalance()+prices);
        totalMoney += prices;
    }
    //deposit
    public void depositSaving( double prices){
        this.setSavingsBalance(this.getSavingsBalance()+prices);
        totalMoney += prices;
    }
    // withdraw 
    // - users should be able to withdraw money from their checking or savings account
    // - do not allow them to withdraw money if there are insufficient funds
    // - all deposits and withdrawals should affect totalMoney

    public void withdrawChecking(double amount){
        if (amount< getCheckingBalance()) {
            this.setCheckingBalance(this.getCheckingBalance()-amount);
            totalMoney -= amount;
        }
        else{
            System.out.println("funds valide");
        }
        
    }
     // getBalance
    public void getBalance(){
        System.out.println("balance is" + this.checkingBalance);
        System.out.println("balance"+ this.savingsBalance);
    
    }

    public double getCheckingBalance(){
        return this.checkingBalance;
    }
    public void setCheckingBalance( double checkingBalance){
        this.checkingBalance= checkingBalance;
    }



    public double getSavingsBalance(){
        return this.savingsBalance;
    }

    public void setSavingsBalance( double savingsBalance){
        this.savingsBalance= savingsBalance;
    }

    public static int getAccounts(){
        return BankAccount.accounts;
    }
    public static void setAccounts(int accounts){
            BankAccount.accounts=accounts;

    }


    public static double getTotalMoney(){
        return BankAccount.totalMoney;
    }
    public static void setTotalMoney(double totalMoney){
            BankAccount.totalMoney=totalMoney;

    }
}
