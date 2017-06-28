import React from "react";
import { Page, Navbar, Card, CardHeader, CardContent } from "framework7-react";

const Terms = () =>
  <Page>
    <Navbar title="Terms & Policies" backLink="Back" sliding />
    <Card>
      <CardHeader style={{ fontWeight: "500" }}>1. Terms</CardHeader>
      <CardContent>
        By accessing this web site, you are agreeing to be bound by these web
        site Terms and Conditions of Use, all applicable laws and regulations,
        and agree that you are responsible for compliance with any applicable
        local laws. If you do not agree with any of these terms, you are
        prohibited from using or accessing this site. The materials contained in
        this web site are protected by applicable copyright and trade mark law.
      </CardContent>
    </Card>
    <Card>
      <CardHeader style={{ fontWeight: "500" }}>2. User License</CardHeader>
      <CardContent>
        This license shall automatically terminate if you violate any of these
        restrictions and may be terminated by RateIt at any time. Upon
        terminating your viewing of these materials or upon the termination of
        this license, you must destroy any downloaded materials in your
        possession whether in electronic or printed format.
      </CardContent>
    </Card>
    <Card>
      <CardHeader style={{ fontWeight: "500" }}>3. User License</CardHeader>
      <CardContent>
        The materials on RateIt's web site are provided "as is". RateIt makes no
        warranties, expressed or implied, and hereby disclaims and negates all
        other warranties, including without limitation, implied warranties or
        conditions of merchantability, fitness for a particular purpose, or
        non-infringement of intellectual property or other violation of rights.
        Further, RateIt does not warrant or make any representations concerning
        the accuracy, likely results, or reliability of the use of the materials
        on its Internet web site or otherwise relating to such materials or on
        any sites linked to this site.
      </CardContent>
    </Card>
  </Page>;

export default Terms;
