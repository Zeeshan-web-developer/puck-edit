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
        console.log("Rendering HeadingBlock with props:", {
          title,
          variant,
          color,
          fontSize,
          textAlign,
        });
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
    //  HeroBlock: {
    //   label: "Hero Section",
    //   fields: {
    //     title: { type: "text", label: "Title" },
    //     subtitle: { type: "text", label: "Subtitle" },
    //     description: { type: "textarea", label: "Description" },
    //     primaryButtonText: { type: "text", label: "Primary Button Text" },
    //     primaryButtonLink: { type: "text", label: "Primary Button Link" },
    //     secondaryButtonText: { type: "text", label: "Secondary Button Text" },
    //     secondaryButtonLink: { type: "text", label: "Secondary Button Link" },
    //     imageUrl: { type: "text", label: "Image URL" },
    //     imageAlt: { type: "text", label: "Image Alt Text" },
    //     reverse: {
    //       type: "radio",
    //       label: "Image Position",
    //       options: [
    //         { label: "Left", value: false },
    //         { label: "Right", value: true },
    //       ],
    //     },
    //     backgroundColor: { type: "text", label: "Background Color" },
    //   },
    //   defaultProps: {
    //     title: "Welcome to Our Site",
    //     subtitle: "Your compelling subtitle here",
    //     description: "This is a hero section with text on the left and an image on the right.",
    //     primaryButtonText: "Get Started",
    //     primaryButtonLink: "#",
    //     secondaryButtonText: "Learn More",
    //     secondaryButtonLink: "#",
    //     imageUrl: "https://via.placeholder.com/600x400",
    //     imageAlt: "Hero image",
    //     reverse: false,
    //     backgroundColor: "#ffffff",
    //   },
    //   render: ({
    //     title,
    //     subtitle,
    //     description,
    //     primaryButtonText,
    //     primaryButtonLink,
    //     secondaryButtonText,
    //     secondaryButtonLink,
    //     imageUrl,
    //     imageAlt,
    //     reverse,
    //     backgroundColor,
    //   }) => (
    //     <div
    //       style={{
    //         display: "flex",
    //         flexDirection: reverse ? "row-reverse" : "row",
    //         alignItems: "center",
    //         gap: "4rem",
    //         padding: "4rem",
    //         backgroundColor,
    //         width: "100%",
    //         maxWidth: "1200px",
    //         margin: "0 auto",
    //       }}
    //     >
    //       <div style={{ flex: 1 }}>
    //         {subtitle && (
    //           <p style={{ fontSize: "1.2rem", color: "#666", marginBottom: "1rem" }}>
    //             {subtitle}
    //           </p>
    //         )}
    //         <h1 style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>{title}</h1>
    //         <p style={{ fontSize: "1.1rem", marginBottom: "2rem", lineHeight: 1.6 }}>
    //           {description}
    //         </p>
    //         <div style={{ display: "flex", gap: "1rem" }}>
    //           <a
    //             href={primaryButtonLink}
    //             style={{
    //               padding: "0.75rem 1.5rem",
    //               backgroundColor: "#0066cc",
    //               color: "white",
    //               borderRadius: "4px",
    //               textDecoration: "none",
    //               fontWeight: "bold",
    //             }}
    //           >
    //             {primaryButtonText}
    //           </a>
    //           <a
    //             href={secondaryButtonLink}
    //             style={{
    //               padding: "0.75rem 1.5rem",
    //               backgroundColor: "transparent",
    //               color: "#0066cc",
    //               border: "2px solid #0066cc",
    //               borderRadius: "4px",
    //               textDecoration: "none",
    //               fontWeight: "bold",
    //             }}
    //           >
    //             {secondaryButtonText}
    //           </a>
    //         </div>
    //       </div>
    //       <div style={{ flex: 1 }}>
    //         <img
    //           src={imageUrl}
    //           alt={imageAlt}
    //           style={{
    //             width: "100%",
    //             height: "auto",
    //             borderRadius: "8px",
    //             boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    //           }}
    //         />
    //       </div>
    //     </div>
    //   ),
    // },
     HeroBlock: {
      label: "Hero Section",
      fields: {
        // Text Content
        title: { type: "text", label: "Title" },
        subtitle: { type: "text", label: "Subtitle" },
        description: { type: "textarea", label: "Description" },
        
        // Text Colors
        titleColor: { type: "text", label: "Title Color",  },
        subtitleColor: { type: "text", label: "Subtitle Color",  },
        textColor: { type: "text", label: "Description Color",  },
        
        // Buttons
        primaryButtonText: { type: "text", label: "Primary Button Text" },
        primaryButtonLink: { type: "text", label: "Primary Button Link" },
        primaryButtonTextColor: { type: "text", label: "Primary Button Text Color", },
        primaryButtonBgColor: { type: "text", label: "Primary Button Background", },
        primaryButtonHoverColor: { type: "text", label: "Primary Button Hover",  },
        
        secondaryButtonText: { type: "text", label: "Secondary Button Text" },
        secondaryButtonLink: { type: "text", label: "Secondary Button Link" },
        secondaryButtonTextColor: { type: "text", label: "Secondary Button Text Color",  },
        secondaryButtonBgColor: { type: "text", label: "Secondary Button Background",  },
        secondaryButtonBorderColor: { type: "text", label: "Secondary Button Border",  },
        secondaryButtonHoverColor: { type: "text", label: "Secondary Button Hover",  },
        
        // Image
        imageUrl: { type: "text", label: "Image URL" },
        imageAlt: { type: "text", label: "Image Alt Text" },
        
        // Layout
        reverse: {
          type: "radio",
          label: "Image Position",
          options: [
            { label: "Left", value: false },
            { label: "Right", value: true },
          ],
        },
        backgroundColor: { type: "text", label: "Background Color",  },
        padding: {
          type: "select",
          label: "Padding",
          options: [
            { label: "Small", value: "2rem" },
            { label: "Medium", value: "4rem" },
            { label: "Large", value: "6rem" },
          ],
        },
      },
      defaultProps: {
        title: "Welcome to Our Site",
        subtitle: "Your compelling subtitle here",
        description: "This is a hero section with text on the left and an image on the right.",
        
        // Default colors
        titleColor: "#000000",
        subtitleColor: "#666666",
        textColor: "#333333",
        
        // Primary button
        primaryButtonText: "Get Started",
        primaryButtonLink: "#",
        primaryButtonTextColor: "#ffffff",
        primaryButtonBgColor: "#0066cc",
        primaryButtonHoverColor: "#004d99",
        
        // Secondary button
        secondaryButtonText: "Learn More",
        secondaryButtonLink: "#",
        secondaryButtonTextColor: "#0066cc",
        secondaryButtonBgColor: "transparent",
        secondaryButtonBorderColor: "#0066cc",
        secondaryButtonHoverColor: "#e6f0fa",
        
        // Image
        imageUrl: "https://via.placeholder.com/600x400",
        imageAlt: "Hero image",
        
        // Layout
        reverse: false,
        backgroundColor: "#ffffff",
        padding: "4rem",
      },
      render: (props) => {
        const {
          title,
          subtitle,
          description,
          titleColor,
          subtitleColor,
          textColor,
          primaryButtonText,
          primaryButtonLink,
          primaryButtonTextColor,
          primaryButtonBgColor,
          primaryButtonHoverColor,
          secondaryButtonText,
          secondaryButtonLink,
          secondaryButtonTextColor,
          secondaryButtonBgColor,
          secondaryButtonBorderColor,
          secondaryButtonHoverColor,
          imageUrl,
          imageAlt,
          reverse,
          backgroundColor,
          padding,
        } = props;

        return (
          <div
            style={{
              display: "flex",
              flexDirection: reverse ? "row-reverse" : "row",
              alignItems: "center",
              gap: "4rem",
              padding: padding,
              backgroundColor,
              width: "100%",
              maxWidth: "1200px",
              margin: "0 auto",
              boxSizing: "border-box",
            }}
          >
            {/* Text Content */}
            <div style={{ flex: 1 }}>
              {subtitle && (
                <p style={{ 
                  fontSize: "1.2rem",
                  color: subtitleColor,
                  marginBottom: "1rem",
                  fontWeight: 500,
                }}>
                  {subtitle}
                </p>
              )}
              
              <h1 style={{ 
                fontSize: "3rem",
                marginBottom: "1.5rem",
                color: titleColor,
                lineHeight: 1.2,
              }}>
                {title}
              </h1>
              
              <p style={{ 
                fontSize: "1.1rem",
                marginBottom: "2rem",
                lineHeight: 1.6,
                color: textColor,
              }}>
                {description}
              </p>
              
              {/* Buttons */}
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                {primaryButtonText && (
                  <a
                    href={primaryButtonLink}
                    style={{
                      padding: "0.75rem 1.5rem",
                      backgroundColor: primaryButtonBgColor,
                      color: primaryButtonTextColor,
                      borderRadius: "4px",
                      textDecoration: "none",
                      fontWeight: "bold",
                      border: "none",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease",
                      textAlign: "center",
                      display: "inline-block",
                      // ':hover': {
                      //   backgroundColor: primaryButtonHoverColor,
                      // },
                    }}
                  >
                    {primaryButtonText}
                  </a>
                )}
                
                {secondaryButtonText && (
                  <a
                    href={secondaryButtonLink}
                    style={{
                      padding: "0.75rem 1.5rem",
                      backgroundColor: secondaryButtonBgColor,
                      color: secondaryButtonTextColor,
                      border: `2px solid ${secondaryButtonBorderColor}`,
                      borderRadius: "4px",
                      textDecoration: "none",
                      fontWeight: "bold",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      textAlign: "center",
                      display: "inline-block",
                      // ':hover': {
                      //   backgroundColor: secondaryButtonHoverColor,
                      // },
                    }}
                  >
                    {secondaryButtonText}
                  </a>
                )}
              </div>
            </div>
            
            {/* Image */}
            <div style={{ flex: 1 }}>
              <img
                src={imageUrl}
                alt={imageAlt}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              />
            </div>
          </div>
        );
      },
    },
  
    StatsBlock: {
      label: "Stats Section",
      fields: {
        stats: {
          type: "array",
          label: "Statistics",
          itemType: {
            type: "object",
            fields: {
              title: { type: "text", label: "Title" },
              value: { type: "text", label: "Value" },
              description: { type: "text", label: "Description" },
            },
          },
        },
        backgroundColor: { type: "text", label: "Background Color" },
      },
      defaultProps: {
        stats: [
          { title: "Users", value: "1M+", description: "Active users worldwide" },
          { title: "Downloads", value: "500K+", description: "App downloads" },
          { title: "Reviews", value: "10K+", description: "Positive reviews" },
        ],
        backgroundColor: "#f5f5f5",
      },
      render: ({ stats, backgroundColor }) => (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            padding: "2rem",
            backgroundColor,
            justifyContent: "center"
          }}
        >
          {stats.map((stat:any, index:number) => (
            <div
              key={index}
              style={{
                flexBasis: "30%",
                minWidth: "250px",
                padding: "1rem",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                textAlign: "center"
              }}
            >
              <h3 style={{ marginBottom: "0.5rem" }}>{stat.title}</h3>
              <p style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{stat.value}</p>
              <p style={{ color: "#666" }}>{stat.description}</p>
            </div>
          ))}
        </div>
      ),
    },
     TableBlock: {
      label: "Table",
      fields: {
        caption: {
          type: "text",
          label: "Table Caption"
        },
        headers: {
          type: "array",
          label: "Column Headers",
          arrayFields: {
            content: {
              type: "text",
              label: "Header Text"
            },
            align: {
              type: "select",
              label: "Alignment",
              options: [
                { label: "Left", value: "left" },
                { label: "Center", value: "center" },
                { label: "Right", value: "right" }
              ]
            }
          }
        },
        rows: {
          type: "array",
          label: "Table Rows",
          arrayFields: {
            cells: {
              type: "array",
              label: "Row Cells",
              arrayFields: {
                content: {
                  type: "text",
                  label: "Cell Content"
                },
                align: {
                  type: "select",
                  label: "Alignment",
                  options: [
                    { label: "Left", value: "left" },
                    { label: "Center", value: "center" },
                    { label: "Right", value: "right" }
                  ]
                },
                colSpan: {
                  type: "number",
                  label: "Column Span",
                  min: 1
                }
              }
            }
          }
        },
        style: {
          type: "radio",
          label: "Table Style",
          options: [
            { label: "Basic", value: "basic" },
            { label: "Striped", value: "striped" },
            { label: "Bordered", value: "bordered" }
          ]
        },
        width: {
          type: "select",
          label: "Table Width",
          options: [
            { label: "Auto", value: "auto" },
            { label: "100%", value: "full" }
          ]
        }
      },
      defaultProps: {
        caption: "Sample Table",
        headers: [
          { content: "Header 1", align: "left" },
          { content: "Header 2", align: "center" },
          { content: "Header 3", align: "right" }
        ],
        rows: [
          {
            cells: [
              { content: "Row 1, Cell 1", align: "left", colSpan: 1 },
              { content: "Row 1, Cell 2", align: "center", colSpan: 1 },
              { content: "Row 1, Cell 3", align: "right", colSpan: 1 }
            ]
          },
          {
            cells: [
              { content: "Row 2, Cell 1", align: "left", colSpan: 1 },
              { content: "Row 2, Cell 2", align: "center", colSpan: 2 }
            ]
          }
        ],
        style: "basic",
        width: "auto"
      },
     render: ({ caption, headers = [], rows = [], style = "basic", width = "auto" }) => {
  const tableStyles = {
    basic: {
      borderCollapse: "collapse",
      width: width === "full" ? "100%" : "auto"
    },
    striped: {
      borderCollapse: "collapse",
      width: width === "full" ? "100%" : "auto"
    },
    bordered: {
      borderCollapse: "separate",
      borderSpacing: 0,
      width: width === "full" ? "100%" : "auto",
      border: "1px solid #ddd"
    }
  };

  const cellStyles = {
    basic: {
      padding: "8px",
      borderBottom: "1px solid #ddd",
      textAlign: "left"
    },
    striped: {
      padding: "8px",
      borderBottom: "1px solid #ddd",
      textAlign: "left"
    },
    bordered: {
      padding: "8px",
      border: "1px solid #ddd",
      textAlign: "left"
    }
  };

  return (
    <div style={{ overflowX: "auto", margin: "16px 0" }}>
      <table style={tableStyles[style]}>
        {caption && <caption style={{ 
          textAlign: "left", 
          fontWeight: "bold",
          marginBottom: "8px"
        }}>{caption}</caption>}
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th 
                key={index}
                style={{
                  ...cellStyles[style],
                  textAlign: header?.align || "left",
                  fontWeight: "bold",
                  backgroundColor: style === "striped" ? "#f2f2f2" : "transparent"
                }}
              >
                {header?.content || `Header ${index + 1}`}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr 
              key={rowIndex}
              style={{
                backgroundColor: style === "striped" && rowIndex % 2 === 0 ? "#f9f9f9" : "transparent"
              }}
            >
              {/* Safely handle cells with default empty array */}
              {(row?.cells || []).map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  style={{
                    ...cellStyles[style],
                    textAlign: cell?.align || "left"
                  }}
                  colSpan={cell?.colSpan || 1}
                >
                  {cell?.content || ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
        }
   

    
  }
};

export default config;
