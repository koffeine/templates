package koffeine.controller;

import koffeine.AbstractTest;
import koffeine.configuration.properties.CorsProperties;
import org.springframework.context.annotation.Import;

@Import(CorsProperties.class)
class AbstractControllerTest extends AbstractTest {

}
