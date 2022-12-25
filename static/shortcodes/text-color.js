CMS.registerEditorComponent({
    id: "text-color",
    label: "Text Color",
    fields: [{
            color: "color",
            label: "Color",
            widget: "string"
        },
    ],
    pattern: /^{{< gist ([a-zA-Z0-9]+) >}}/,
    fromBlock: function(match) {
        return {
            color: match[1],
        };
    },
    toBlock: function(obj) {
        return `{{< text-color ${obj.color} >}}`;
    },
    toPreview: function(obj) {
        return `{{< text-color ${obj.color} >}}`;
    },
});