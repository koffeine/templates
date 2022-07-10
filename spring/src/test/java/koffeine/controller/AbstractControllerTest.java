package koffeine.controller;

import koffeine.AbstractTest;
import koffeine.configuration.properties.CorsProperties;
import org.springframework.context.annotation.Import;

@Import(CorsProperties.class)
public class AbstractControllerTest extends AbstractTest {

}
