import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
    assertNotEquals,
} from "http://deno.land/std/testing/asserts.ts"

let site1 = 'Youtube'
let site2 = 'Globo'

Deno.test("Atividade QTS Sites =)", () => {
    assertEquals(site1.length, site2.length, "Sites de tamanhos diferentes!"); 
    
})