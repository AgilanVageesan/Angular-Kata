export class Calculator{

    public getArea(length: number, breath: number): number{
        return length * breath;
    }

    public getParameter(length: number, breath: number): number{
        return 2*(length + breath);
    }
}