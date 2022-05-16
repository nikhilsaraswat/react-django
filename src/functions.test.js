// Every files here will be part of test
import {timesTwo} from "./functions"
test("Multiplies by two",()=>{     // first arg name of test and second what should be tested
    expect(timesTwo(4)).toBe(8)    // we are using jest configured as part of create-react-app
})