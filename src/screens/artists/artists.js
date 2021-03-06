import React, {Component} from 'react';
//import {WebView} from 'react-native';
import { WebView } from 'react-native-webview';


// import {connect} from 'react-redux';
// import {DrawerActions} from 'react-navigation-drawer';

import {ScrollView, View, Dimensions, Text} from 'react-native';

import {ThemedView, Header} from 'src/components';
import {TextHeader, IconHeader, Logo, CartIcon} from 'src/containers/HeaderComponent';

import {
    dataConfigSelector,
    toggleSidebarSelector,
} from 'src/modules/common/selectors';
//import Artistas from '../../containers/Artistas';

// // Containers
// import Slideshow from './home/containers/Slideshow';
// import CategoryList from './home/containers/CategoryList';
// import ProductList from './home/containers/ProductList';
// import ProductCategory from './home/containers/ProductCategory';
// import Banners from './home/containers/Banners';
// import TextInfo from './home/containers/TextInfo';
// import CountDown from './home/containers/CountDown';
// import BlogList from './home/containers/BlogList';
// import Testimonials from './home/containers/Testimonials';
// import Button from './home/containers/Button';

// const {width}= Dimensions.get('window');

// const containers = {
//     slideshow: Slideshow,
//     categories: CategoryList,
//     products: ProductList,
//     productcategory: ProductCategory,
//     banners: Banners,
//     text: TextInfo,
//     countdown: CountDown,
//     blogs: BlogList,
//     testimonials: Testimonials,
//     button: Button,
// };

// const widthComponent = (spacing) => {
//     if (!spacing) {return width;}
//     const marginLeft = spacing.marginLeft && parseInt(spacing.marginLeft) ? parseInt(spacing.marginLeft) : 0;
//     const marginRight = spacing.marginRight && parseInt(spacing.marginRight) ? parseInt(spacing.marginRight) : 0;
//     const paddingLeft = spacing.paddingLeft && parseInt(spacing.paddingLeft) ? parseInt(spacing.paddingLeft) : 0;
//     const paddingRight = spacing.paddingRight && parseInt(spacing.paddingRight) ? parseInt(spacing.paddingRight) : 0;
//     return width - marginLeft - marginRight - paddingLeft - paddingRight;
// };

class Artists extends Component {
    render() {
      return (
        <WebView source={{ uri: 'https://artcontemporaneo.com/artistas/' }} 
         //style={{marginTop: 20}}
         />
        
         
    
      );
    }
  }

  

// const mapStateToProps = state => {
//     return {
//         config: dataConfigSelector(state),
//         toggleSidebar: toggleSidebarSelector(state),
//     };
// };

// export default connect(mapStateToProps)(Forum);

export default Artists;
