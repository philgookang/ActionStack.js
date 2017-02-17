# ActionStack.js
A simple javascript class that holds all the action in side the body content of the page and runs through the stacked actions at the end of the page--to prevent page loading bottle-necks.

Overview
--------
While working on sites, there were times when we call js code inside the page. In real world situation, we cannot perfectly send all the js code to the body of the page and call them.

Therefore by utilizing this action stack, we can save all the action need to run into a javascript array, which is than called once the page rendering is complete. This will (I hope) prevent bottle-necks.


Ussage Example
------------------

```
    <script>
        // somewhere inside your body content
        ActionStack.add(function() {
            alert("Hey, call me once the page is finished loading");
        });

        // any-other somewhere inside your body content
        ActionStack.add(function() {
            // you can call a simple ajax request once the page finish loading.
        });
    </script>
    ...
    </body>
    <script>
        // add this at the end of the page
        ActionStack.process();
    </script>
</html>
```
