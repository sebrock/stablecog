import type { Translation } from '../i18n-types';

const ptBr: Translation = {
	Language: 'Idioma',
	Home: {
		GenerateButton: 'Gerar',
		PromptInput: {
			Placeholder: 'Retrato de um gato por Van Gogh'
		},
		WidthTabBar: {
			Title: 'Largura',
			Paragraph: 'A largura da imagem.'
		},
		HeightTabBar: {
			Title: 'Altura',
			Paragraph: 'A altura da imagem.'
		},
		InferenceStepsTabBar: {
			Title: 'Etapas de Inferência',
			Paragraph: 'Quantas etapas serão tomadas para gerar (difundir) a imagem.'
		},
		GuidanceScaleSlider: {
			Title: 'Escala de Orientação',
			Paragraph:
				'O quão semelhante a imagem será do seu prompt.\nValores maiores tornam a imagem mais próxima do seu prompt.'
		},
		NegativePromptInput: {
			Title: 'Prompt Negativo',
			Placeholder: 'Prompt Negativo',
			Paragraph: 'Remove coisas indesejadas da imagem. Faz o oposto do que o prompt faz.'
		},
		SeedInput: {
			Title: 'Semente',
			Placeholder: 'Número de semente',
			Paragraph:
				'Isto gera resultados repetidos. Uma semente combinada com o mesmo prompt e opções gera a mesma imagem.'
		},
		ModelDropdown: {
			Title: 'Modelo',
			Paragraph: 'O modelo da IA que será utilizado para gerar a imagem.'
		},
		SchedulerDropdown: {
			Title: 'Agendador',
			Paragraph:
				'Difunde a imagem de uma certa maneira. Pode alterar drasticamente a imagem gerada. Alguns requerem menos etapas para produzir bons resultados.'
		},
		SubmitToGalleryQuestion: {
			Title: 'Submeter as gerações para a galeria?',
			Paragraph: 'Você pode alterar a sua preferência nas configurações quando quiser.'
		}
	},
	History: {
		GenerationsTitle: 'Gerações',
		GenerationsMaxSavedCountWarning: 'Somente os {count} últimos',
		NoGenerationsYet: 'Você ainda não gerou nenhuma imagem.'
	},
	Live: {
		GenerationsTitle: 'Gerações',
		TotalDurationTitle: 'Duração Total',
		UpscalesTitle: 'Melhorias',
		GenerationTooltip: {
			CountryTitle: 'País',
			Type: {
				Title: 'Tipo',
				Generation: 'Gerações',
				Upscale: 'Melhorias'
			},
			DimensionsTitle: 'Dimensões',
			StepsTitle: 'Etapas',
			ScaleTitle: 'Escala',
			DurationTitle: 'Duração',
			Status: {
				Title: 'Status',
				Started: 'Iniciado',
				Succeeded: 'Bem-sucedido',
				Failed: 'Falhado'
			},
			Server: {
				Title: 'Servidor',
				Default: 'Padrão',
				Custom: 'Personalizado'
			},
			UnknownTitle: 'Desconhecido'
		},
		WaitingTitle: 'Aguardando por gerações',
		DurationStatusUnknown: 'Desconhecido'
	},
	Navbar: {
		HomeTab: 'Início',
		HistoryTab: 'Histórico',
		GalleryTab: 'Galeria',
		LiveTab: 'Ao vivo'
	},
	Settings: {
		Title: 'Configurações',
		SwitchServerButton: 'Alternar Servidor',
		SubmitToGalleryToggle: 'Submeter à Galeria',
		AdvancedModeToggle: 'Modo Avançado',
		AdvancedOptionsDropdown: 'Opções Avançadas',
		AdvancedDropdown: 'Avançado',
		GenerationSettingsButton: 'Configurações de Geração',
		GenerationSettingsTitle: 'Configurações de Geração',
		DarkModeToggle: 'Modo Escuro'
	},
	GenerationFullscreen: {
		DownloadButton: 'Baixar',
		DoneButtonState: 'Pronto!',
		CopyPromptButton: 'Copiar Prompt',
		CopyNegativePromptButton: 'Copiar Prompt Negativo',
		CopiedButtonState: 'Copiado!',
		RerollButton: 'Rolar de novo',
		RegenerateButton: 'Regenerar',
		GenerateButton: 'Gerar',
		UpscaleButton: 'Melhoria',
		UpscaleTabBar: {
			UpscaledTitle: 'Melhorado',
			OriginalTitle: 'Original'
		},
		Dimensions: {
			Title: 'Dimensões'
		},
		Duration: {
			Title: 'Duração'
		}
	},
	SetServerModal: {
		SetServerTitle: 'Definir Servidor',
		SwitchServerTitle: 'Alternar Servidor',
		Paragraph: 'O servidor será utilizado para geração de imagens.',
		SetButton: 'Definir',
		DefaultButton: 'Padrão'
	},
	Blog: {
		Title: 'Postagens do Blog',
		TitleAlt: 'Blog',
		BackToBlogButton: 'Voltar ao Blog'
	},
	Redirect: {
		RedirectingToTitle: 'Redirecionando para {name}'
	},
	Shared: {
		StartGeneratingTitle: 'Começar a gerar lindas imagens!',
		StartGeneratingButton: 'Começar a Gerar',
		JoinUsTitle: 'Junte-se a Nós',
		GoHomeButton: 'Ir para a Página Inicial',
		SwitchToDefaultServerButton: 'Alternar para o Servidor Padrão',
		ShareButton: 'Compartilhar',
		ShareOnButton: 'Compartilhar no {name}',
		YesButton: 'Sim',
		NoButton: 'Não',
		EnableButton: 'Ativar',
		DisableButton: 'Desativar',
		AddButton: 'Adicionar',
		CopyLinkButton: 'Copiar Link',
		CopyButton: 'Copiar',
		DeleteButton: 'Deletar',
		LoadingTitle: 'Carregando',
		LoadingParagraph: 'Carregando...',
		ServerUrlInput: {
			Placeholder: 'URL do Servidor'
		},
		EmailInput: {
			Placeholder: 'E-mail'
		},
		PasswordInput: {
			Placeholder: 'Senha'
		},
		ModelOptions: {
			'048b4aa3-5586-47ed-900f-f4341c96bdb2': {
				realName: 'Stable Diffusion 1.5',
				simpleName: 'Geral'
			},
			'8acfe4c8-751d-4aa6-8c3c-844e3ef478e0': {
				realName: 'Openjourney',
				simpleName: 'Arte Digital 3D'
			},
			'36d9d835-646f-4fc7-b9fe-98654464bf8e': {
				realName: 'Arcane Diffusion',
				simpleName: 'Quadrinhos 3D'
			},
			'48a7031d-43b6-4a23-9f8c-8020eb6862e4': {
				realName: 'Ghibli Diffusion',
				simpleName: 'Anime'
			},
			'790c80e1-65b1-4556-9332-196344389572': {
				realName: 'Mo-Di Diffusion',
				simpleName: 'Filme Animado'
			},
			'eaa438e1-dbf9-48fd-be71-206f0f257617': {
				realName: 'Redshift Diffusion',
				simpleName: '3D Render'
			}
		},
		SchedulerOptions: {
			'55027f8b-f046-4e71-bc51-53d5448661e0': {
				realName: 'LMS'
			},
			'6fb13b76-9900-4fa4-abf8-8f843e034a7f': {
				realName: 'Euler'
			},
			'af2679a4-dbbb-4950-8c06-c3bb15416ef6': {
				realName: 'Euler A.'
			}
		},
		UnknownTitle: 'Desconhecido',
		MoreOptionsTitle: 'Mais Opções',
		LessOptionsTitle: 'Menos Opções',
		TryAgainButton: 'Try Again'
	},
	Error: {
		SomethingWentWrong: 'Algo deu errado :(',
		NSFW: 'Conteúdo impróprio detectado, tente outro prompt :(',
		ServerSeemsOffline:
			'O servidor parece estar offline. Talvez você queira atualizar a página ou definir outro servidor nas configurações.',
		ServerSetNotWorking: 'Este servidor não é compatível ou não responde.',
		NotFound: 'Não encontrado',
		SupabaseNotFoundCantListen:
			'Instância de Supabase não encontrado. Não posso escutar para gerações.',
		InvalidEmail: 'Enter a valid email.',
		PasswordTooShort: 'Password must be at least 8 characters.',
		SomethingWentWrongTryAgain: 'Something went wrong, try again.',
		InvalidCredentials: 'Invalid credentials.'
	},
	Admin: {
		AdminPanelTitle: 'Administrador',
		DeleteButton: 'Deletar',
		ApproveButton: 'Aprovar',
		NoGenerationsToReview: 'Sem gerações para revisar.',
		ServersButton: 'Servidores',
		GalleryButton: 'Galeria',
		UsersButton: 'Users'
	},
	SignUp: {
		PageTitle: 'Sign Up',
		PageParagraph: 'Join Stablecog to become a pro member and unlock its full potential.',
		PageTitleConfirm: 'Confirm',
		PageParagraphConfirm:
			"We've emailed you a 6-digit code. Enter it below to confirm your account.",
		SignUpButton: 'Sign Up',
		ConfirmButton: 'Confirm',
		AlreadyHaveAnAccountTitle: 'Already have an account?',
		LoginInsteadButton: 'Login instead',
		SixDigitCodeInput: {
			Placeholder: '6-Digit Code'
		}
	},
	SignIn: {
		PageTitle: 'Sign In',
		PageParagraph: 'Start using Stablecog with all features that are available to your account.',
		DontHaveAnAccountTitle: "Don't have an account?",
		SignUpInsteadButton: 'Sign up instead',
		SignInButton: 'Sign In',
		SignOutButton: 'Sign Out'
	},
	Pro: {
		PageTitle: 'Become a Pro',
		PageParagraph:
			"Unlock all features of Stablecog and support the project. Without the pro members, Stablecog wouldn't be able to stay completely open-source and offer free generations to everyone.",
		PageTitleAlreadyPro: 'Already a Pro!',
		PageParagraphAlreadyPro:
			'You are already a pro member. Thank you for supporting the project! Go ahead and enjoy Stablecog, and consider sharing it with your friends.',
		ProPlanTitle: 'Pro',
		Features: {
			FullSpeed: 'Full speed without set limits',
			ImageDimensions: 'Different image dimensions',
			Upscale: 'Upscale images',
			Steps: 'Different inference steps',
			MoreModels: 'More models',
			MoreSchedulers: 'More schedulers',
			SavedToCloud: 'Generations saved to the cloud',
			Upcoming: 'Upcoming features',
			CommercialUse: 'Commercial Use'
		},
		Soon: '(soon)',
		Month: '/month',
		BecomeProButton: 'Become a Pro',
		Success: {
			PageTitle: "You're a Pro!",
			PageParagraph:
				'You now have access to everything Stablecog has to offer. If you have any questions, reach out to us on {platform}.'
		},
		Cancel: {
			PageTitle: "You've cancelled",
			PageParagraph:
				"You've cancelled the subscription process. If it was a mistake, you can try again."
		},
		Reason: {
			ParagraphWidth: "That image width isn't available on the free plan.",
			ParagraphHeight: "That image height isn't available on the free plan.",
			ParagraphDimensions: "Those image dimensions aren't available on the free plan.",
			ParagraphUpscale: "Upscale feature isn't available on the free plan.",
			ParagraphInferenceSteps: "That inference steps setting isn't available on the free plan.",
			ParagraphModel: "That AI model isn't available on the free plan.",
			ParagraphScheduler: "That scheduler isn't available on the free plan.",
			ParagraphWidthGeneration:
				"That generation was created using an image width that isn't available on the free plan.",
			ParagraphHeightGeneration:
				"That generation was created using an image height that isn't available on the free plan.",
			ParagraphDimensionsGeneration:
				"That generation was created using image dimensions that aren't available on the free plan.",
			ParagraphInferenceStepsGeneration:
				"That generation was created using an inference steps setting that isn't available on the free plan.",
			ParagraphModelGeneration:
				"That generation was created using a model that isn't available on the free plan.",
			ParagraphSchedulerGeneration:
				"That generation was created using a scheduler that isn't available on the free plan."
		}
	},
	Account: {
		PageTitle: 'Account',
		ManageSubscriptionButton: 'Manage Subscription',
		ManageAccountButton: 'Manage Account',
		MyAccountButton: 'My Account',
		SubscriptionPlanTitle: 'Plan'
	},
	ForgotPassword: {
		PageTitle: 'Reset Password',
		PageParagraph: 'We will send a 6-digit code to your email for resetting your password.',
		SendResetCodeButton: 'Send Code',
		PageTitleConfirmCode: 'Confirm',
		PageParagraphConfirmCode: "We've emailed you a 6-digit code. Enter it below to continue.",
		ConfirmCodeButton: 'Confirm',
		PageTitleNewPassword: 'New Password',
		PageParagraphNewPassword: 'Enter a new password for your account.',
		NewPasswordInput: {
			Placeholder: 'New Password'
		},
		SetNewPasswordButton: 'Set New Password',
		PageTitleSuccess: 'Done!',
		PageParagraphSuccess: 'Your password has been successfully reset.',
		ForgotPasswordButton: 'Forgot Password?'
	}
};
export default ptBr;
