import type { Config } from "@measured/puck";

export const config: Config = {
  components: {
    HeadingBlock: {
      label: "Heading",
      fields: {
        title: { type: "text", label: "Text" },
        variant: {
          type: "radio",
          label: "Variant",
          options: [
            { label: "H1", value: "h1" },
            { label: "H2", value: "h2" },
            { label: "H3", value: "h3" },
            { label: "H4", value: "h4" },
            { label: "H5", value: "h5" },
            { label: "H6", value: "h6" },
          ],
        },
        color: { type: "text", label: "Color" },
        fontSize: { type: "number", label: "Font Size (px)", min: 8, max: 100 },
        textAlign: {
          type: "radio",
          label: "Text Align",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
      },
      defaultProps: {
        title: "Heading",
        variant: "h2",
        color: "#000000",
        fontSize: 32,
        textAlign: "left",
      },
      render: ({ title, variant, color, fontSize, textAlign }) => {
        const Tag = variant;
        return (
          <Tag style={{ color, fontSize, textAlign, margin: 0 }}>{title}</Tag>
        );
      },
    },

    ParagraphBlock: {
      label: "Paragraph",
      fields: {
        text: { type: "textarea", label: "Text" },
        color: { type: "text", label: "Text Color" },
        fontSize: { type: "number", label: "Font Size (px)", min: 8, max: 64 },
        textAlign: {
          type: "radio",
          label: "Text Align",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
      },
      defaultProps: {
        text: "This is a paragraph.",
        color: "#333333",
        fontSize: 16,
        textAlign: "left",
      },
      render: ({ text, color, fontSize, textAlign }) => (
        <p style={{ color, fontSize, textAlign }}>{text}</p>
      ),
    },

    ImageBlock: {
      label: "Image",
      fields: {
        src: { type: "text", label: "Image URL" },
        alt: { type: "text", label: "Alt Text" },
        width: { type: "number", label: "Width (px)", min: 50, max: 1000 },
        height: { type: "number", label: "Height (px)", min: 50, max: 1000 },
      },
      defaultProps: {
        src: "https://via.placeholder.com/300",
        alt: "Sample Image",
        width: 300,
        height: 200,
      },
      render: ({ src, alt, width, height }) => (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={{ display: "block", maxWidth: "100%" }}
        />
      ),
    },

    ButtonBlock: {
      label: "Button",
      fields: {
        label: { type: "text", label: "Label" },
        href: { type: "text", label: "Link URL" },
        color: {
          type: "select",
          label: "Color",
          options: [
            { label: "Default", value: "default" },
            { label: "Primary", value: "primary" },
            { label: "Secondary", value: "secondary" },
          ],
        },
        variant: {
          type: "select",
          label: "Variant",
          options: [
            { label: "Contained", value: "contained" },
            { label: "Outlined", value: "outlined" },
            { label: "Text", value: "text" },
          ],
        },
      },
      defaultProps: {
        label: "Click Me",
        href: "#",
        color: "primary",
        variant: "contained",
        width:"auto"
      },
    
      render: ({ label, href, color, variant,width }) => {
  const styles: Record<string, any> = {
    contained: {
      backgroundColor:
        color === "primary"
          ? "#1976d2"
          : color === "secondary"
          ? "#9c27b0"
          : "#e0e0e0",
      color: "#fff",
      border: "none",
    },
    outlined: {
      backgroundColor: "transparent",
      color: "#1976d2",
      border: "2px solid #1976d2",
    },
    text: {
      backgroundColor: "transparent",
      color: "#1976d2",
      border: "none",
    },
  };

  return (
    <a href={href} style={{ textDecoration: "none", display: "inline-block",width }}>
      <button
        style={{
          ...styles[variant],
          padding: "10px 20px",
          borderRadius: "4px",
          cursor: "pointer",
          whiteSpace: "nowrap",
           width: width === "100%" ? "100%" : "auto", // Control width here
          display: "inline-block", // Important!
        }}
      >
        {label}
      </button>
    </a>
  );
},

    },

    LinkBlock: {
      label: "Link",
      fields: {
        text: { type: "text", label: "Link Text" },
        href: { type: "text", label: "Link URL" },
        color: { type: "text", label: "Text Color" },
        fontSize: { type: "number", label: "Font Size (px)", min: 8, max: 64 },
      },
      defaultProps: {
        text: "Click here",
        href: "#",
        color: "#1976d2",
        fontSize: 16,
      },
      render: ({ text, href, color, fontSize }) => (
        <a
          href={href}
          style={{ color, fontSize, textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      ),
    },
  //   FlexContainer: {
  //     label: "Flex Container",
  //     fields: {
  //       itemWidth: {
  //     type: "select",
  //     label: "Item Width",
  //     options: [
  //       { label: "Auto", value: "auto" },
  //       { label: "Equal Width", value: "1" },
  //     ],
  //   },
  //       direction: {
  //         type: "radio",
  //         label: "Direction",
  //         options: [
  //           { label: "Row", value: "row" },
  //           { label: "Column", value: "column" },
  //         ],
          
  //       },
  //       justify: {
  //         type: "radio",
  //         label: "Justify Content",
  //         options: [
  //           { label: "Flex Start", value: "flex-start" },
  //           { label: "Center", value: "center" },
  //           { label: "Flex End", value: "flex-end" },
  //           { label: "Space Between", value: "space-between" },
  //           { label: "Space Around", value: "space-around" },
  //         ],
  //       },
  //       align: {
  //         type: "radio",
  //         label: "Align Items",
  //         options: [
  //           { label: "Flex Start", value: "flex-start" },
  //           { label: "Center", value: "center" },
  //           { label: "Flex End", value: "flex-end" },
  //           { label: "Stretch", value: "stretch" },
  //         ],
  //       },
  //       gap: {
  //         type: "number",
  //         label: "Gap (px)",
  //         min: 0,
  //         max: 100,
  //       },
  //       padding: {
  //         type: "number",
  //         label: "Padding (px)",
  //         min: 0,
  //         max: 100,
  //       },
  //       background: {
  //         type: "text",
  //         label: "Background Color",
  //       },
  //       wrap: {
  //         type: "radio",
  //         label: "Wrap Items",
  //         options: [
  //           { label: "No Wrap", value: "nowrap" },
  //           { label: "Wrap", value: "wrap" },
  //         ],
  //       },
  //     },
  //     defaultProps: {
  //       direction: "row", // Changed from column to row
  //       justify: "flex-start",
  //       align: "center", // Better alignment for buttons in a row
  //       gap: 16,
  //       padding: 16,
  //       background: "transparent",
  //       wrap: "nowrap", // Prevent wrapping by default
  //     },
  //     accepts: ["HeadingBlock", "ParagraphBlock", "ImageBlock", "ButtonBlock", "LinkBlock"],
  //     render: ({ direction, justify, align, gap, padding, background, wrap, itemWidth, puck: { renderDropZone: DropZone } }) => {
  //      console.log("Rendering FlexContainer with props:", {
  //         direction,
  //         justify,
  //         align,
  //         gap,
  //         padding,
  //         background,
  //         wrap,
  //         itemWidth,
  //       });
  //   return (
  //     <div
  //       style={{
  //         display: "flex",
  //         flexDirection: direction,
  //         justifyContent: justify,
  //         alignItems: align,
  //         gap: `${gap}px`,
  //          padding: `${padding}px`,
  //         background,
  //         flexWrap: wrap,
  //         width: "100%",
  //       }}
  //     >
  //       <DropZone
  //         zone="flex-items"
  //         style={{
  //           display: "flex",
  //           flexDirection: direction,
  //           flexWrap: wrap,
  //           gap: `${gap}px`,
  //           width: "100%",
  //         }}
          
  //       />
  //     </div>
  //   );
  // },
    //   },
    FlexContainer: {
  label: "Flex Container",
  fields: {
    itemWidth: {
      type: "select",
      label: "Item Width",
      options: [
        { label: "Auto", value: "auto" },
        { label: "Equal Width", value: "1" },
      ],
    },
    direction: {
      type: "radio",
      label: "Direction",
      options: [
        { label: "Row", value: "row" },
        { label: "Column", value: "column" },
      ],
    },
    justify: {
      type: "radio",
      label: "Justify Content",
      options: [
        { label: "Flex Start", value: "flex-start" },
        { label: "Center", value: "center" },
        { label: "Flex End", value: "flex-end" },
        { label: "Space Between", value: "space-between" },
        { label: "Space Around", value: "space-around" },
      ],
    },
    align: {
      type: "radio",
      label: "Align Items",
      options: [
        { label: "Flex Start", value: "flex-start" },
        { label: "Center", value: "center" },
        { label: "Flex End", value: "flex-end" },
        { label: "Stretch", value: "stretch" },
      ],
    },
    gap: {
      type: "number",
      label: "Gap (px)",
      min: 0,
      max: 100,
    },
    padding: {
      type: "number",
      label: "Padding (px)",
      min: 0,
      max: 100,
    },
    background: {
      type: "text",
      label: "Background Color",
    },
    wrap: {
      type: "radio",
      label: "Wrap Items",
      options: [
        { label: "No Wrap", value: "nowrap" },
        { label: "Wrap", value: "wrap" },
      ],
    },
  },
  defaultProps: {
    direction: "row",
    justify: "flex-start",
    align: "center",
    gap: 16,
    padding: 16,
    background: "transparent",
    wrap: "nowrap",
    itemWidth: "auto",
  },
  accepts: ["HeadingBlock", "ParagraphBlock", "ImageBlock", "ButtonBlock", "LinkBlock"],
  render: ({ direction, justify, align, gap, padding, background, wrap, itemWidth, puck: { renderDropZone: DropZone } }) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: direction,
          justifyContent: justify,
          alignItems: align,
          gap: `${gap}px`,
          padding: `${padding}px`,
          background,
          flexWrap: wrap,
          width: "100%",
          minHeight: "100px", // Add minimum height for better visibility
        }}
      >
        <DropZone 
          zone="flex-items"
          style={{
            display: "flex",
            flexDirection: direction,
            justifyContent: justify,
            alignItems: align,
            flexWrap: wrap,
            gap: `${gap}px`,
            width: "100%",
            flex: 1, // Important for proper flex behavior
          }}
        />
      </div>
    );
  },
},
    
  },
};

export default config;
