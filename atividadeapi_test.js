import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
    assertNotEquals,
} from "http://deno.land/std/testing/asserts.ts"

let champ = 'Teemo'
let champ2 = 'teemo'

Deno.test("Atividade QTS!", () => {
    assertEquals(champ, "Teemo"); 
    
})

Deno.test("Champ Teste", ()=> {
    assertNotEquals(champ.toLowerCase(), champ2.toLowerCase());
})