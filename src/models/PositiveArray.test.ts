import { PositiveArray } from "./PositiveArray";

let array:PositiveArray
describe('test array', ()=> {
beforeAll(()=>{
    array = new PositiveArray
})



test('adicionar numero positivo ', ()=> {
  array.add(1)
  expect(array.values[0]).toBe(1)
})

test('REmover um numero do array ', ()=> {
    array.add(10)
    array.add(45)
    array.add(98)
    array.add(65)
    array.remove(2)
    expect(array.length).toBe(4)
})

test('tentativa de Remover um index inesistente', ()=> {
    array.add(1)
    array.remove(10)
    expect(array.length).toBe(5)
})

})