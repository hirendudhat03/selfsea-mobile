package com.selfseamobile;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import com.facebook.FacebookSdk;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;

import java.util.Arrays;
import java.util.List;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "SelfseaMobile";
  }
  
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }

//  @Override
  protected List<ReactPackage> getPackages() {
    return Arrays.asList(
            new MainReactPackage(),
            new ReactNativeConfigPackage()
    );
  }
}
