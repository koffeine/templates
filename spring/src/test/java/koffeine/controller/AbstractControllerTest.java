package koffeine.controller;

import koffeine.AbstractTest;
import koffeine.configuration.properties.CorsProperties;
import org.springframework.context.annotation.Import;
import org.springframework.security.test.context.support.WithMockUser;

@Import(CorsProperties.class)
@WithMockUser
public class AbstractControllerTest extends AbstractTest {

}
