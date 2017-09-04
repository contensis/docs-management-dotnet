
(function(){

    function getScriptParams() {
        var script = document.getElementById("version-selector-script");
        return {
            urlRoot : script.getAttribute("data-urlRoot"),
            version : script.getAttribute("data-version")
        };
    }

    alert(JSON.stringify(getScriptParams()));

})();