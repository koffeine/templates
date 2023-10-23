package koffeine.controller;

import koffeine.AbstractTest;
import koffeine.configuration.SecurityConfiguration;
import koffeine.configuration.properties.CorsProperties;
import org.springframework.context.annotation.Import;
import org.springframework.security.test.context.support.WithMockUser;

@Import({ CorsProperties.class, SecurityConfiguration.class })
@WithMockUser(authorities = "user")
class AbstractControllerTest extends AbstractTest {

}
