import { Calculator } from './calculator';


describe('Calculator validation', function(){

    it('Area is equal to 100', function(){
        // Arrange
        let cal: Calculator = new Calculator();

        // Act
        const actualResult = cal.getArea(10,20)

        // Assert
        const expectedResult = 200;
        expect(actualResult).toBe(expectedResult);
    });

    it('Parameter is greater then 100', ()=> {
        // Arrange
        let cal: Calculator = new Calculator();

        // Act
        const actualResult = cal.getParameter(20,50);

        // Assert
        expect(actualResult).toBeGreaterThan(100);
    })

})