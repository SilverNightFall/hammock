<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet version="1.0"   xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
      <xsl:for-each select="//book">
        <div>
          <xsl:value-of select="title"></xsl:value-of>
        </div>
      </xsl:for-each>
    </xsl:template>

</xsl:stylesheet> 

