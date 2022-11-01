function get_dir(current_dir: String, filesystem: Object) {
    if (current_dir == "/") return filesystem;

    let split = current_dir.split("/");
    let current = filesystem;

    for (let i = 0; i < split.length; i++) {
        if (split[i] != "") {
            current = current[split[i]];
            console.log(current);
            console.log(split[i]);
        }
    }

    return current;
}

function start() {
    let filesystem = {
        "run_cat_on_this_file.txt":
            "Hey! Welcome to Deuterium Browser!\nThis is a simple demo to see Deuterium without installation.\n\nThis version of Deuterium does not include:\n\n- Templates\n\nEnjoy!",
        test: {
            "hello.txt": "Nothing here.",
            "test2": {
                "none": ""
            }
        },
    };

    const VALID_COMMANDS = [
        "dt",
        "d", // Deuterium
        "cd",
        "ls",
        "cat", // Bash commands
    ];

    let current_dir = "/test/test2";

    console.log(get_dir(current_dir, filesystem));

    let input_box = <HTMLInputElement>document.getElementById("terminal-input");
    let run_btn: HTMLElement | null = document.getElementById("run-btn");

    run_btn?.addEventListener("click", () => {
        let text: String = input_box?.value;

        let splt = text.split(" ");

        if (VALID_COMMANDS.indexOf(splt[0]) > -1) {
            // Valid command beyond this point

            console.log(`[ VALID COMMAND ] ${splt[0]}`);
            if (splt[0] === "dt" || splt[0] === "d") {
                // Deuterium command
                console.log(`[ COMMAND INDENTIFIED ] ${splt[0]}`);

                if (splt[1] == "nf") {
                    console.log("[ DEUTERIUM COMMAND ] New File (nf)");

                    if (splt.length >= 3) {
                        console.log(
                            `[ DEUTERIUM NEW FILE ] Making File: ${splt[2]}`
                        );
                    }
                } else if (splt[1] == "df") {
                    console.log("[ DEUTERIUM COMMAND ] Delete File (df)");
                } else if (splt[1] == "nd") {
                    console.log("[ DEUTERIUM COMMAND ] New Directory (nd)");
                } else if (splt[1] == "dd") {
                    console.log("[ DEUTERIUM COMMAND ] Delete Directory (dd)");
                } else {
                    console.error(
                        "[ INVALID DEUTERIUM COMMAND ] COMMAND NOT SUPPORTED IN BROWSER DEUTERIUM."
                    );
                }
            }
        }
    });
}

start();
