package ahmetov.slearnbackend.security;

public interface SecurityConstant {
    String SIGN_UP_URLS = "/";
    String SECRET = "SecretKeyGenJWT";
    String TOKEN_PREFIX = "Bearer ";
    String HEADER_STRING = "Authorization";
    String CONTENT_TYPE = "application/json; charset=utf-8";
    long EXPIRATION_TIME = 600_000;
}
