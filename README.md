# HyperXML

HyperXML is an XML-based markup language designed to translate to HTML while offering additional features. It provides a streamlined way to write HTML-like documents with the advantages of XML, including self-closing tags for empty elements and more powerful component definitions.

## Features

- **XML Syntax**: Uses XML syntax for HTML elements, making it more strict and predictable.
  - Example: `<div />` instead of `<div></div>`
- **Title Attribute**: The `<head>` tag can include a `title` attribute for setting the document title. If not present, the `<title>` element is used. If neither is provided, the title defaults to "Untitled".
- **Reusable Components**: Define reusable components with the `<definition>` tag and include them using the `<include>` tag.
  - Example:
    ```xml
    <definition name="header">
      <div class="header">
        <h1><parameter name="title">Default Title</parameter></h1>
      </div>
    </definition>

    <include definition="header">
      <parameter name="title">Custom Title</parameter>
    </include>
    ```
- **Parameters**: Pass dynamic content to definitions using the `<parameter>` tag.
- **Script and Style Support**: Include external JavaScript and CSS files using self-closing `<script>` and `<style>` tags with the `src` attribute.
  - Example:
    ```xml
    <script src="script.js" />
    <style src="styles.css" />
    ```
  - Note: `<style src="..."/>` works like `<style>@import url(...)</style>`, not `<link>`.
- **Browser Support**: Supports all browsers and can be included via XSLT located at [v1.xsl](https://hyperxml.vercel.app/v1.xsl) or precompiled to HTML at [compile](https://hyperxml.vercel.app/compile).

## Usage Examples

### Basic Document

```xml
<!DOCTYPE hyperxml>
<?xml-stylesheet href="https://hyperxml.vercel.app/v1.xsl" type="text/xsl"?>
<hyperxml>
  <head title="Example" />
  <body>
    <h1>Example</h1>
    <p>This is an example of a HyperXML document.</p>
  </body>
</hyperxml>
```

### Definition and Include with Parameter

```xml
<!DOCTYPE hyperxml>
<?xml-stylesheet href="https://hyperxml.vercel.app/v1.xsl" type="text/xsl"?>
<hyperxml>
  <definition name="header">
    <div class="header">
      <h1><parameter name="title">Default Title</parameter></h1>
    </div>
  </definition>

  <head title="Example" />
  <body>
    <include definition="header">
      <parameter name="title">Custom Title</parameter>
    </include>
  </body>
</hyperxml>
```

### Script and Style with `src` Attributes

```xml
<!DOCTYPE hyperxml>
<?xml-stylesheet href="https://hyperxml.vercel.app/v1.xsl" type="text/xsl"?>
<hyperxml>
  <head title="Example">
    <style src="styles.css" />
    <script src="script.js" />
  </head>
  <body>
    <h1>Example</h1>
    <p>This document includes external CSS and JavaScript files.</p>
  </body>
</hyperxml>
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests to enhance HyperXML.

## Links

- [XSLT for Browsers](https://hyperxml.vercel.app/v1.xsl)
- [Precompile to HTML](https://hyperxml.vercel.app/compile)

## Acknowledgments

Thank you for using HyperXML! We hope it makes your web development process more efficient and enjoyable.