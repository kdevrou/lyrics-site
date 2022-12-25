CMS.registerEditorComponent({
    id: "text-color",
    label: "Text Color",
    fields: [{
            color: "color",
            label: "Color",
            widget: "string"
        },
        {
            color: "text",
            label: "Text",
            widget: "markdown"
        },
    ],
    pattern: new RegExp(`^{{< text-color ([a-zA-Z0-9]+) >}}("[a-zA-Z\\s0-9:!@#\$%\/\^\&*\)\(+=._-]+"){{< /text-color >}}`),
    fromBlock: function(match) {
        return {
            color: match[1],
            text: match[2],
        };
    },
    toBlock: function(obj) {
        return `{{< text-color ${obj.color} >}}${obj.text}{{< /text-color >}}`;
    },
    toPreview: function(obj) {
        return `{{< text-color ${obj.color} >}}${obj.text}{{< /text-color >}}`;
    },
});