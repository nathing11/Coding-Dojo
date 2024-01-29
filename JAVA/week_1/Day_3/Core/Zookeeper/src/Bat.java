
public class Bat extends Mamal {
	private int energy;
	public Bat() {
	}
	public Bat(String name, int energy) {
        super(name, energy); 
        this.energy = 300;
    }
	
	public int getEnergy() {
		return energy;
	}
	public void setEnergy(int energy) {
		this.energy = energy;
	}
	public void fly(){
		this.energy -= 50;
		System.out.println( "the bat is airborne.");
	}
	
	public void eatHumans(){
		this.energy += 25;
		System.out.println( "the Bat is satisfied after eating a human.");
	}
	
	public void attackTown(){
	this.energy -= 100;
	System.out.println( "the Bat Atack a town.");
	}

}
