import Ask from "https://deno.land/x/ask@1.0.6/mod.ts";
import * as Colors from "https://deno.land/std/fmt/colors.ts";
const ask = new Ask();

async function app() {

    console.log(Colors.blue(`
    ===============================
    #          FIBONACCI          #
    ===============================
    `))
    //ENTRY NUMBER 
    let number = await ask.prompt([
        {
            name: "x",
            type: "input",
            message: "Entry one number"
        }
    ])
    // ENTRY OPTION TO RESTART THE APP
    async function restart() {
        let selectedOption = await ask.prompt([
            {
                name: "option",
                type: "input",
                message: "Restart the application: y/n"
            }
        ])
        let option = selectedOption.option
        return option
    }

    function fibonacci(limit: number) {
        let init = [0, 1]
        for (let i = 2; i <= limit; i++)
            init[i] = init[i - 1] + init[i - 2]
        return init
    }

    let x : any = number.x
    const start = fibonacci(parseInt(x))
    
    //RETURN NUMBER LIST
    console.log(Colors.blue("List:"), start)
    
    //RESTART DE APP OR EXIT 
    const resetApp = await restart()
    if (resetApp === "y" || resetApp === "yes" || resetApp === "Y" || resetApp === "YES") {
        app()
    } else {
        console.log(Colors.red(`
    =============================
    #           EXIT            #
    =============================
    `))
    }

}
app()
