export class CounterComponent{
    public counter: number = 0;

    public incrementCounter(): number{
        this.counter++;
        return this.counter;
    }

    public decrementCounter(): number{
        this.counter--;
        return this.counter;
    }
}