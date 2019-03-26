    <object id="sqltext" data="sql.txt" type="text/plain" style="display:none"></object>
    <script>
        var obj = document.getElementById("sqltext");
        obj.onload = function() {
            var loadtext = obj.contentDocument.documentElement.textContent;
            alert(loadtext);
        }
    </script>
