import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Icon from 'react-icons-kit';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Input from 'reusecore/src/elements/Input';
import Select from 'reusecore/src/elements/Select';
import Container from 'common/src/components/UI/Container';
import ParticlesComponent from '../../Hosting/Particle';
import BannerWrapper, {
  CtaWrapper,
  List,
  DiscountWrapper,
  DiscountLabel,
} from './banner.style';

import { arrowRight } from 'react-icons-kit/feather/arrowRight';

const BannerSection = ({
  row,
  title,
  description,
  button,
  textArea,
  ctaArea,
  discountAmount,
  discountText,
}) => {

  const Data = useStaticQuery(graphql`
    query {
      apiHomepage { 
        header_discount_amount
        header_discount_text
        heading
        sub_heading
      }
    }
  `);

  return (
    <BannerWrapper id="banner_section">
      <ParticlesComponent />
      <Container className="banner_container">
        <Box {...row}>
          <Box {...textArea}>
            <DiscountWrapper>
              <DiscountLabel>
                <Text {...discountAmount} content={Data.apiHomepage.header_discount_amount} />
                <Text
                  {...discountText}
                  content={Data.apiHomepage.header_discount_text}
                />
              </DiscountLabel>
            </DiscountWrapper>
            <Heading
              as="h1"
              {...title}
              content={Data.apiHomepage.heading}
            />
            <Text
              {...description}
              content={Data.apiHomepage.sub_heading}
            />
          </Box>
          <Box {...ctaArea}>
            <CtaWrapper>
              <Button
                {...button}
                icon={<Icon icon={arrowRight} size={24} />}
              />
            </CtaWrapper>
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  ctaArea: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textArea: {
    width: ['100%', '100%', '90%', '100%', '55%'],
  },
  title: {
    fontSize: ['26px', '32px', '42px', '46px', '55px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px', '25px', '25px', '25px'],
    lineHeight: '1.31',
    textAlign: 'center',
  },
  description: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '0',
    textAlign: 'center',
  },
  button: {
    title: 'Get Started',
    type: 'button',
    fontSize: '18px',
    fontWeight: '500',
    color: '#fff',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    iconPosition: 'right',
  },
  ctaArea: {
    className: 'search_area',
    width: ['100%', '100%', '80%', '100%', '70%'],
    mt: ['45px', '50px', '60px', '60px', '60px'],
  },
  discountAmount: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '600',
    color: '#eb4d4b',
    mb: 0,
    as: 'span',
    mr: '0.4em',
  },
  discountText: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '400',
    color: '#0f2137',
    mb: 0,
    as: 'span',
  },
};

export default BannerSection;
