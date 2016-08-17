﻿using Promact.Oauth.Server.Repository.OAuthRepository;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace Promact.Oauth.Server.Tests
{
    public class OAuthRepositoryTest : BaseProvider
    {
        private readonly IOAuthRepository _oAuthRepository;
        public OAuthRepositoryTest():base()
        {
            _oAuthRepository = serviceProvider.GetService<IOAuthRepository>();
        }

        /// <summary>
        /// Checking client is exist or not. If not it will create OAuth response for request.
        /// </summary>
        [Fact, Trait("Category", "Required")]
        public void OAuthClientChecking()
        {
            var response = _oAuthRepository.OAuthClientChecking(Email, ClientId);
            Assert.Null(response);
        }

        /// <summary>
        /// Static Variables to be used in OAuth Repository Test
        /// </summary>
        private static string Email = "siddhartha@promactinfo.com";
        private static string ClientId = "dsfargazdfvfhfghkf";
    }
}