import { CounterComponent } from './counter';


describe('Validate Counter', () =>{

    let counter: CounterComponent;

    beforeEach(() => {
        counter = new CounterComponent();
    })


    it('check for positive value', ()=> {
        // Arrange
        //let counter: CounterComponent = new CounterComponent();

        // Act
        const countValue = counter.incrementCounter();

        // Assert
        expect(countValue).toBeGreaterThan(0);

    });

    it('Check for negative number', () => {
        //let counter = new CounterComponent();
        const countValue = counter.decrementCounter();
        expect(countValue).toBeLessThan(0);
    })

})