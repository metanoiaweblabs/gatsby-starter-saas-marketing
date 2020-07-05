import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="features">
    <StyledContainer>
      <Subtitle>Products</Subtitle>
      <SectionTitle>Resturant Managent System</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>POS Software</FeatureTitle>
          <FeatureText>
          LUCID POS supports all restaurant formats including Fine dine, QSR, Lounge Bars, chains.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>ERP Software</FeatureTitle>
          <FeatureText>
          Automate all departments of your Restaurant Business. Purchase, Inventory, F & B Costing, Finance.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Mobile POS</FeatureTitle>
          <FeatureText>
          Handheld Order taking system. Increase Customer Satisfaction and Table turn over.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Loyalty & Customer Engagement Solutions</FeatureTitle>
          <FeatureText>
          Build a loyal Customer base using our solutions like , eCoupons, Gift cards, Pre-paid cards, eCRM.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Menu Engineering & Food Costing</FeatureTitle>
          <FeatureText>Increase your restaurant profitability through accurate cost analysis and menu pricing.</FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>LUCID Messenger for Restaurants</FeatureTitle>
          <FeatureText>
          Be informed on the move through automated SMS & email alerts and Reports on a daily basis.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
  text-align: center;
`

const FeatureText = styled.p`
  text-align: center;
`
