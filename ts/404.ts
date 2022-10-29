function auto_set_frame_size(frame: HTMLElement, resize_obj: HTMLElement) {
    if (
        resize_obj.getBoundingClientRect().width >
        frame.getBoundingClientRect().width
    ) {
        frame.style.width = (
            resize_obj.getBoundingClientRect().width + 15
        ).toString();
    }
}

function start_404_animation() {
    let last_message: HTMLElement | null;

    const messages = document.getElementById("console-messages");
    const del_dir: HTMLElement | null =
        document.getElementById("first-command-text"); // i have renamed this 2 times because of Cannot redeclare block-scoped variable error

    del_dir
        ? (del_dir.innerText =
              "C:\\getdeuterium-win> dt dd " + document.location.host + document.location.pathname)
        : null;

    setTimeout(() => {
        let dir_removed = document.createElement("li");
        dir_removed.innerHTML = "<h3>Directory successfully removed.</h3>";
        messages?.appendChild(dir_removed);

        last_message = dir_removed;
    }, 2000);

    setTimeout(() => {
        let normal_dir_msg = document.createElement("li");
        normal_dir_msg.innerHTML = "<h3>C:\\getdeuterium-win>";
        normal_dir_msg.classList.add("blinking-right");
        messages?.appendChild(normal_dir_msg);

        last_message = normal_dir_msg;
    }, 2100);

    setTimeout(() => {
        last_message
            ? (last_message.innerHTML =
                  "<h3>C:\\getdeuterium-win> why are you still on the 404 page lol")
            : null;
    }, 4000);

    setTimeout(() => {
        last_message?.classList.remove("blinking-right");
        let final_msg = document.createElement("li");
        final_msg.innerHTML = "<h3>C:\\getdeuterium-win> bro its been one minute 💀";
        final_msg.classList.add("blinking-right");
        messages?.appendChild(final_msg);

        last_message = final_msg;
    }, 60000);
}

start_404_animation();
