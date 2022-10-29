const del_dir:  HTMLElement | null = document.getElementById("first-command-text"); // i have renamed this 2 times because of Cannot redeclare block-scoped variable error
del_dir ? del_dir.innerText = "C:\\getdeuterium-win> dt dd " + document.location.origin : null;

