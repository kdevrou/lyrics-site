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
    pattern: new RegExp(`^{{< text-color color="([a-zA-Z0-9]+)" >}}([\s\S]*?(?=\n.*?{|$))`),
    fromBlock: function(match) {
        return {
            color: match[1],
            text: match[2],
        };
    },
    toBlock: function(obj) {
        return `{{< text-color color="${obj.color}" >}}${obj.text}{{< /text-color >}}`;
    },
    toPreview: function(obj) {
        return `{{< text-color color="${obj.color}" >}}${obj.text}{{< /text-color >}}`;
    },
});