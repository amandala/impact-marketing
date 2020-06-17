import React from "react";
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import { InlineLink } from "../../components/Link";
import { H1, H2, P, Tiny } from "../../components/Typography";

import styles from "./index.module.scss";

export default () => {
  return (
    <Layout className={styles.Black}>
      <Section className={styles.HeadingWrapper}>
        <img
          className={styles.Logo}
          src="/assets/impactlogo.png"
          alt="Impact Logo"
        />
        <div>
          <H1 impact className={styles.Heading}>
            Marketplace
          </H1>
        </div>
      </Section>
      <Section>
        <H1>A note from our Marketplace Manager</H1>
        <P>
          Thank you for your interest in Digital Impact! We’re looking forward
          to seeing what services or products you would like to offer our
          audiences. My name is Callum Mathers, I’m the Marketplace Manager for
          this organization.
        </P>
        <P>
          Whether this is your first time exploring E Commerce, or you are an
          established online business, we are ready to help you get on board
          with us.
        </P>
        <H2>Submit Your Products & Services</H2>
        <P>
          We will be using the Shopify Platform to organize and display all
          vendors. We recommend following this{" "}
          <InlineLink href="https://help.shopify.com/en/manual/products/import-export/using-csv#product-csv-file-format">
            guide for filling a spreadsheet with your product names, options,
            and prices.
          </InlineLink>
        </P>
        <P>
          You can download an{" "}
          <InlineLink href="https://help.shopify.com/csv/product_template.csv">
            example spreadsheet, partially filled out already, here.
          </InlineLink>
        </P>
        <P>
          We do not need all of the columns filled in, don’t worry! There are
          just a few that are important. I just ask that you{" "}
          <strong>
            do not rearrange the order of the COLUMNS on this spreadsheet
          </strong>
          .
        </P>
        <P>
          <ul>
            <li className={styles.ListItem}>
              <strong>Handle</strong> - Dashes between words, eg.
              no-spaces-please.
            </li>
            <li className={styles.ListItem}>
              <strong>Title</strong> - The name of your product or service. Same
              as the handle, but with spaces.
            </li>
            <li className={styles.ListItem}>
              <strong>Body</strong> - This is where you add your product
              description, and any policies you may have.
            </li>
            <li className={styles.ListItem}>
              <strong>Vendor</strong> - Keep this the same for all of your
              products, this is how we will keep track of your sales to pay you.
            </li>
            <li className={styles.ListItem}>
              <strong>Option1 Name (IF APPLICABLE)</strong> - This is only for
              people with products that have variations to them. (Eg. Colour).
            </li>
            <li className={styles.ListItem}>
              <strong>Option1 Value (IF APPLICABLE)</strong> - If you have an
              Option1 Name, then you will want to Copy/Paste the entire row to
              be the same, but then have a different option1 value on the 2nd
              line (EG. Rows 1 and 2 may have the Option1 Name “Colour”, but
              Option1 Value on Row 1 is “Black”, and Option1 Value on Row 2 is
              “Red”).
            </li>
            <li className={styles.ListItem}>
              <strong>Variant Inventory Tracker</strong> - If you have a limited
              number, please write “shopify” without the quotation marks.
            </li>
            <li className={styles.ListItem}>
              <strong>Variant Inventory Quantity</strong> - (If you have a
              limited number, put the number of this product that are available.
              If you’re not sure, don’t worry, you can leave both of these
              columns blank.
            </li>
            <li className={styles.ListItem}>
              <strong>Variant Fulfillment Service</strong> - must say “shopify”
              without the quotation marks.
            </li>
            <li className={styles.ListItem}>
              <strong>Variant Price</strong> - The price, without any dollar
              signs. These will be sold in Canadian dollars. If you know that
              you have to charge tax, please include tax you want to collect in
              the price of your product. If you have pledged to contribute a
              portion of your sales that you need to make up for, it is your
              responsibility to increase the price of your product listing to
              meet your bottom line.
            </li>
            <li className={styles.ListItem}>
              <strong>Variant Requires Shipping</strong> - if yes, then put
              TRUE. If it is a digital product, then put FALSE.
            </li>
          </ul>
        </P>
        <P>
          For further help with this process, please do the best you can, and
          send your work to me for review by replying to{" "}
          <InlineLink href="mailto:callum@partywell.org">
            {" "}
            callum@partywell.org
          </InlineLink>
          with your spreadsheet attached.
        </P>
        <H2>Photos</H2>
        <P>We will want to have photos to use of your products or services!</P>
        <P>
          You can upload images of up to 4472 x 4472 pixels with a file size of
          up to 20 MB. The platform typically recommends using 2048 x 2048
          pixels for square product photos. These are high-resolution images
          that give your store a professional and well-rounded look with great
          zoom capabilities.
        </P>
        <H2>Policies</H2>
        <P>
          Different vendors are going to have different policies around refunds,
          fulfillment times, and pricing for custom products. Please include
          your policy in the Body[HTML] Column of the product CSV spreadsheet.
          For refund policies, please do not promise the charitable portion of a
          purchase back to customers, as once we have donated the money to
          charity, it cannot be recovered.
        </P>
      </Section>
      <Section>
        <H1>If you already have an E-Commerce store</H1>
        <P>
          Great! There is likely a way to “export” your products into a
          spreadsheet easily. If you are using the Shopify platform, you can
          <InlineLink href="https://help.shopify.com/en/manual/products/import-export/export-products">
            follow this tutorial
          </InlineLink>
          . Otherwise, you can google “[Your ecommerce platform name] product
          export csv” for a tutorial.
        </P>
      </Section>
      <Section>
        <H1>
          An important note to people selling print-on-demand and dropshipping
          products
        </H1>
        <P>
          If you have automatic fulfillments for products built in an existing
          store, please let us know so that we can advise you on how to easily
          and best fulfill them when orders come in through our marketplace. Our
          recommendation is that you set up a private 100% discount code for
          yourself on your website, and use it to place the orders again on your
          store based on orders that come in through our marketplace. This will
          allow us to easily display your products; but also let you take
          advantage of the automations set up on your site already.
        </P>
      </Section>
      <Section>
        <H1>Payouts</H1>
        <P>
          I will be generating reports and organizing payouts after each event.
          Please allow up to 7 days post event for me to get back to you with
          exact payout numbers and an expected payout date.
        </P>
      </Section>
      <Section>
        <P>
          Thanks for letting us showcase your work! If you have any further
          questions, please feel free to contact me at{" "}
          <InlineLink href="mailto:callum@partywell.org">
            callum@partywell.org
          </InlineLink>{" "}
          Talk soon,
        </P>
        <P>Callum Mathers</P>
        <Tiny>Marketplace Manager</Tiny>
        <Tiny>Digital Impact</Tiny>
      </Section>
    </Layout>
  );
};
