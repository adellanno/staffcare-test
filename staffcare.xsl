<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/data">

  <html>
    <head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-rc1/jquery.min.js"> &#160; </script>
      <script type="text/javascript" src="javascript.js">&#160;</script>
      <link rel="stylesheet" type="text/css" href="styles.css" />
    </head>
    <body>
      <div class="container">

        <h1>Give As You Earn</h1>

        <div class="forms">
          <form>
            <span><xsl:value-of select="options/selectionText" /></span>
            <input class="inputform" type="text" name="Flex Model Amount" />
            <br />
            <br />
            <span>Please tell us which charity you wish to donate to: </span>
            <input class="inputform" type="text" name="Chosen Charity" />
            <br />
            <br />
            <input id="amount_submit" type="submit" value="Save" />
          </form>
          <form target="_blank" action="http://www.staffcare.net/" >
            <input  type="submit" value="Return to summary" />
          </form>
        </div>

        <h2>Current Selection</h2>

        <div class="current_selection_container">
          <table>
            <xsl:for-each select="object/object[@instance='197786']/property">
              <tr>
                <td><xsl:value-of select="@name" /></td>
                <td class="current_selection"><xsl:value-of select="format/@answer" /></td>
                <td class="current_selection"><xsl:value-of select="format/@indicator" /></td>
              </tr>
            </xsl:for-each>
          </table>
        </div>
      </div>
    </body>
  </html>
</xsl:template>
</xsl:stylesheet>
